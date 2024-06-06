from pydantic import BaseModel


class Location(BaseModel):
    name: str
    description: str
    latitude: float
    longitude: float


# Global list of Location objects
locations: list[Location] = [
    Location(
        name="Recife de Corais",
        description="Recife de corais",
        latitude=-8.119142,
        longitude=-34.918090,
    ),
    # Locais na costa brasileira com relevancia ecologica
    Location(
        name="Fernando de Noronha",
        description="Arquipelago de Fernando de Noronha",
        latitude=-3.844010,
        longitude=-32.422500,
    ),
    Location(
        name="Atol das Rocas",
        description="Atol das Rocas",
        latitude=-3.858333,
        longitude=-33.800000,
    ),
    Location(
        name="Parque Nacional Marinho dos Abrolhos",
        description="Parque Nacional Marinho dos Abrolhos",
        latitude=-17.983333,
        longitude=-38.666667,
    ),
    Location(
        name="Parque Nacional Marinho de Fernando de Noronha",
        description="Parque Nacional Marinho de Fernando de Noronha",
        latitude=-3.844010,
        longitude=-32.422500,
    ),
    Location(
        name="Parque Nacional Marinho de Abrolhos",
        description="Parque Nacional Marinho de Abrolhos",
        latitude=-17.983333,
        longitude=-38.666667,
    ),
    Location(
        name="Parque Nacional Marinho de Fernando de Noronha",
        description="Parque Nacional Marinho de Fernando de Noronha",
        latitude=-3.844010,
        longitude=-32.422500,
    ),
    Location(
        name="Parque Nacional Marinho de Fernando de Noronha",
        description="Parque Nacional Marinho de Fernando de Noronha",
        latitude=-3.844010,
        longitude=-32.422500,
    ),
    # Pontos de poluicao maritima na costa brasileira
    Location(
        name="Recife de Corais",
        description="Recife de corais",
        latitude=-8.119142,
        longitude=-34.918090,
    ),
]


def get_locations() -> list[Location]:
    return locations


def add_location(location: Location):
    locations.append(location)


def remove_location(name: str):
    global locations
    for location in locations:
        if location.name == name:
            locations.remove(location)
            break


def rename_location(old_name: str, new_name: str):
    for location in locations:
        if location.name == old_name:
            location.name = new_name
            break
