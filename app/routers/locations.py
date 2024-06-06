from typing import Optional

from fastapi import APIRouter

from app.internal.database import (
    get_locations,
    Location,
    add_location,
    remove_location,
    rename_location,
)

router = APIRouter(prefix="/locations", tags=["locations"])


@router.get("/")
async def read_locations(name: Optional[str] = None) -> list[Location]:
    locations = get_locations()

    # Caso o parâmetro 'name' seja passado, filtrar as localizações
    if name is not None:
        filtered_locations = []
        for location in locations:
            # Verificar o nome da localização parcialmente (case-insensitive)
            if name.lower() in location.name.lower():
                filtered_locations.append(location)

    return locations


@router.post("/")
async def create_location(location: Location) -> Location:
    add_location(location)
    return location


@router.delete("/{name}")
async def delete_location(name: str):
    remove_location(name)
    return {"message": f"Location '{name}' has been removed"}


@router.put("/{old_name}/{new_name}")
async def update_location(old_name: str, new_name: str):
    rename_location(old_name, new_name)
    return {"message": f"Location '{old_name}' has been renamed to '{new_name}'"}
