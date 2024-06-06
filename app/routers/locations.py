from fastapi import APIRouter

from app.internal.database import get_locations, Location, add_location

router = APIRouter(prefix="/locations", tags=["locations"])


@router.get("/")
async def read_locations() -> list[Location]:
    locations = get_locations()
    return locations


@router.post("/")
async def create_location(location: Location) -> Location:
    add_location(location)
    return location
