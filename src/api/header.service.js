import {axios} from "@/plugins/axios";

export const headerService = {
    getContent
};

async function getContent() {
    return await axios.get(`getHeaderContent`);
}

