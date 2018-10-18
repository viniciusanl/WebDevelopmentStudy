const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: // criar um rótulo para a estrutura de repetição for
    for (a in nums) {
        for (b in nums) {
            if (a == 2 && b == 3) break externo
                // O break se refere a estrutura com o nome do rótulo
            console.log(`Par = ${a},${b}`)
        }
    }