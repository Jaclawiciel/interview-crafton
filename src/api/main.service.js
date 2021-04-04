import {axios} from "@/plugins/axios";

export const mainService = {
    getContent
};

async function getContent() {
    return await axios.get(`getMainContent`);
}

