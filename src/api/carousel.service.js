import {axios} from "@/plugins/axios";

export const carouselService = {
    getContent
};

async function getContent() {
    return await axios.get(`getCarouselContent`);
}

