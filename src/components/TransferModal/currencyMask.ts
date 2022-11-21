import React from "react"

export const currencyMask = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value

    value = value.replace('.', '').replace(',', '').replace(/\D/g, '')

    const options = { minimumFractionDigits: 2 }
    const result = new Intl.NumberFormat('pt-BR', options).format(
        parseFloat(value) / 100
    )

    return result
}