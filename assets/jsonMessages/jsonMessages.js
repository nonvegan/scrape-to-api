module.exports = {
    scraping: {
        missingData: {
            msg: "Missing Data",
            message: {
                eng: "Missing Data",
                pt: "Dados não encontrados"
            },
            status: 404,
            success: false
        },
        permissionDenied: {
            msg: "Permission denied",
            message: {
                eng: "Permission denied",
                pt: "Não autorizado"
            },
            status: 403,
            success: false
        },
        error: {
            msg: "Error",
            message: {
                eng: "Invalid data",
                pt: "Os dados são inválidos!"
            },
            success: false,
            status: 400,
        }
    }
}