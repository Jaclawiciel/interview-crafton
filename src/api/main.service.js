import {axios} from "@/plugins/axios";

export const mainService = {
    getContent,
    sendContactForm,
};

async function getContent() {
    return await axios.get(`getMainContent`);
}

async function sendContactForm(data) {
    return await axios.post("getMainContent", data)
}
