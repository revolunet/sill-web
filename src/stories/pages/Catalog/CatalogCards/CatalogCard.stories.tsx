import { CatalogCard } from "ui/components/pages/Catalog/CatalogCards/CatalogCard";
import { sectionName } from "./sectionName";
import { getStoryFactory } from "stories/getStory";
import { Software } from "sill-api";

const { meta, getStory } = getStoryFactory({
    sectionName,
    "wrappedComponent": { CatalogCard },
    "defaultContainerWidth": 450,
});

export default meta;

const software: Software = {
    "id": 2,
    "name": "Acceleo",
    "function": "Outil et/ou plugin de génération de tout ou partie du code",
    "referencedSinceYear": "2018",
    "recommendationStatus": "recommended",
    "parentSoftware": null,
    "isFromFrenchPublicService": false,
    "isPresentInSupportContract": false,
    "alikeSoftwares": [],
    "wikidata": {
        "descriptionFr": "logiciel informatique",
        "descriptionEn": "free code generator",
        "websiteUrl": "https://www.eclipse.org/acceleo",
        "sourceUrl": "https://github.com/eclipse/acceleo",
    },
    "comptoirDuLibreSoftware": {
        "id": 304,
        "created": new Date("2019-03-07T08:48:43+00:00"),
        "modified": new Date("2020-06-17T09:13:10+00:00"),
        "url": "https://comptoir-du-libre.org/fr/softwares/304",
        "name": "Acceleo",
        "licence": "EPL Eclipse Public License",
        "external_resources": {
            "website": "http://www.eclipse.org/acceleo/",
            "repository":
                "https://projects.eclipse.org/projects/modeling.m2t.acceleo/developer",
        },
        "providers": [
            {
                "id": 580,
                "url": "https://comptoir-du-libre.org/fr/users/580",
                "name": "Obeo",
                "type": "Company",
                "external_resources": {
                    "website": "https://www.obeosoft.com",
                },
            },
        ],
        "users": [
            {
                "id": 1871,
                "url": "https://comptoir-du-libre.org/fr/users/1871",
                "name": "DÉMO collectivité",
                "type": "Administration",
                "external_resources": {
                    "website": "",
                },
            },
            {
                "id": 702,
                "url": "https://comptoir-du-libre.org/fr/users/702",
                "name": "Ville de Boé",
                "type": "Administration",
                "external_resources": {
                    "website": "https://www.ville-boe.fr/",
                },
            },
        ],
    },
    "license": "EPL-2.0",
    "whereAndInWhatContextIsItUsed":
        "Outil et/ou plugin de génération de tout ou partie du code",
    "catalogNumeriqueGouvFrId": null,
    "mimGroup": "MIMDEV",
    "versionMin": "3.7.8",
    "versionMax": null,
    "hasReferent": true,
    "workshopUrl": null,
    "testUrl": null,
    "useCasesUrl": [],
    "services": [],
};

export const VueDefault = getStory({
    software,
    "openLink": {
        "href": "https://example.com",
        "onClick": () => {},
    },
});
