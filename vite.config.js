import { defineConfig } from "vite";
import dotenv from 'dotenv' ;

export default defineConfig({
    plugins: [],

    define : {
        'process.env.APIKEY': JSON.stringify(process.env.APIKEY),
        'process.env.APIURL': JSON.stringify(process.env.APIURL)
    }
})