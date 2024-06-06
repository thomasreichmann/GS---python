from pydantic import BaseModel


class Location(BaseModel):
    name: str
    description: str
    latitude: float
    longitude: float


# Global list of Location objects
locations: list[Location] = []


def get_locations() -> list[Location]:
    return locations


def add_location(location: Location):
    locations.append(location)
