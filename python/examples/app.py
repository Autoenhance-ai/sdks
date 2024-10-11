import os
import autoenhance
import logging
import requests
from flask import Flask, request, render_template, redirect, url_for
import uuid


logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger()

autoenhance = autoenhance.Autoenhance(os.environ["API_KEY"])

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def upload():
    if request.method == "POST":
        files = request.files.getlist("file")
        order_id = str(uuid.uuid4())

        for file in files:
            logger.info(f"Uploading {file.filename}...")

            image = autoenhance.create_image(
                image_name=file.filename,
                image_type=file.mimetype,
                content_type=file.mimetype,
                order_id=order_id,
            )

            logger.info(f"Image {image.image_id} registered...")
            logger.info(
                f"Uploading data to {image.s3_put_object_url} with {file.mimetype}..."
            )

            response = requests.put(
                image.s3_put_object_url,
                headers={"Content-Type": file.mimetype},
                data=file.read(),
            )

            response.raise_for_status()

            logger.info(f"File {file.filename} uploaded successfully.")

        return redirect(url_for("order", id=order_id))

    return render_template("upload.html")


@app.route("/orders/<id>")
def order(id):
    order = autoenhance.retrieve_order(id=id)

    order = {
        "created_at": order.created_at,
        "name": order.name,
        "images": [
            {
                "image_name": image.image_name,
                "url": f"{autoenhance.configuration.host}/v3/images/{image.image_id}/preview",
            }
            for image in order.images
        ],
    }
    return render_template("order.html", autoenhance=autoenhance, order=order)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
