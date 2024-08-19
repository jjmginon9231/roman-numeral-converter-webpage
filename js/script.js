const input = document.getElementById("number"),
    convert = document.getElementById("convert-btn"),
    output = document.getElementById("output");

const numerals = [
    ["M", 1e3],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
];

input.addEventListener("keydown",
    (
        e => {
            "Enter" === e.key && convert.click()
        }
    )
);

convert.addEventListener("click",
    (
        () => {
            let value = input.value;
            if (value) if (value <= 0)
                output.innerText = "Please enter a number greater than or equal to 1.",
                    output.style.color = "#dc143c",
                    output.style.fontSize = "large";
            else if (value > 3999)
                output.innerText = "Please enter a number less than or equal to 3999.",
                    output.style.color = "#dc143c",
                    output.style.fontSize = "large";
            else {
                let result = "";
                for (const [roman, number] of numerals) for (; number <= value;)
                    result += roman, value -= number;
                output.innerText = result,
                    output.style.color = "#0521ad",
                    output.style.fontSize = "xx-large"
            } else
                output.innerText = "Please enter a valid number.",
                    output.style.color = "#dc143c",
                    output.style.fontSize = "large"
        }
    )
);