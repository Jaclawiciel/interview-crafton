import {axios} from "@/plugins/axios";

export const footerService = {
    getContent
};

async function getContent() {
    return await axios.get(`getFooterContent`);
}

