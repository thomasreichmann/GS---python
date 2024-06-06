from typing import Union, Dict

from fastapi import FastAPI
from pydantic import BaseModel
from .routers import locations

app = FastAPI()

app.include_router(locations.router)


class Item(BaseModel):
    name: str
    price: float
    is_offer: Union[bool, None] = None


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


class ItemResponse(BaseModel):
    item_name: str
    item_id: int
    did_update: bool = True
    maybe_null: int = None


@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item) -> ItemResponse:
    return ItemResponse(item_name=item.name, item_id=item_id)
