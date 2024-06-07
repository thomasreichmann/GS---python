from typing import Union, Dict

from fastapi import FastAPI
from pydantic import BaseModel
from starlette.responses import RedirectResponse
from starlette.staticfiles import StaticFiles

from .routers import locations

app = FastAPI()

app.include_router(locations.router)


class Item(BaseModel):
    name: str
    price: float
    is_offer: Union[bool, None] = None


app.mount("/", StaticFiles(directory="docs/build", html=True), name="docs")


@app.get("/openapi.json")
def get_openapi():
    return app.openapi()
