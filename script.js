const arr = ["a", "b", "c"];
const method1 = prompt("Enter your method(length , unshift , slice)");

if (method1 == "length") {
    console.log(arr.length);
} else if (method1 == "unshift") {
    const unshiftPrompt = prompt("add text");
    console.log(arr.unshift(unshiftPrompt));
} else if (method1 == "slice") {
    const slice1 = prompt("add slice index");
    const slice2 = prompt("add slice index");
    console.log(arr.slice(slice, slice2));
}