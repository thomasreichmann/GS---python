from typing import Union, Dict

from fastapi import FastAPI
from pydantic import BaseModel
from starlette.responses import RedirectResponse

from .routers import locations

app = FastAPI()

app.include_router(locations.router)


class Item(BaseModel):
    name: str
    price: float
    is_offer: Union[bool, None] = None


@app.get("/")
def read_root():

    return RedirectResponse(url="/docs")
