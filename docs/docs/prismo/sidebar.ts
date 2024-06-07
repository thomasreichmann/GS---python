import type {SidebarsConfig} from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
    apiSidebar: [
        {
            type: "doc",
            id: "prismo/fastapi",
        },
        {
            type: "category",
            label: "locations",
            items: [
                {
                    type: "doc",
                    id: "prismo/read-locations-locations-get",
                    label: "Read Locations",
                    className: "api-method get",
                },
                {
                    type: "doc",
                    id: "prismo/create-location-locations-post",
                    label: "Create Location",
                    className: "api-method post",
                },
                {
                    type: "doc",
                    id: "prismo/delete-location-locations-name-delete",
                    label: "Delete Location",
                    className: "api-method delete",
                },
                {
                    type: "doc",
                    id: "prismo/update-location-locations-old-name-new-name-put",
                    label: "Update Location",
                    className: "api-method put",
                },
            ],
        },
        {
            type: "category",
            label: "UNTAGGED",
            items: [
                {
                    type: "doc",
                    id: "prismo/read-root-get",
                    label: "Read Root",
                    className: "api-method get",
                },
                {
                    type: "doc",
                    id: "prismo/get-openapi-openapi-json-get",
                    label: "Get Openapi",
                    className: "api-method get",
                },
            ],
        },
    ],
};

export default sidebar.apiSidebar;
