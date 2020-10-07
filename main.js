// The headline element
const display = document.querySelector('#display')
// The input field for size
const inputSize = document.querySelector('#input-size')
// The select field for font family
const selectFont = document.querySelector('#select-font')
// The input field for input color
const inputColor = document.querySelector('#input-color')
// The input field for input background color
const inputBgColor = document.querySelector('#input-bg-color')
// The textarea field for enter text
const enterText = document.querySelector('#enter-text')
// The element that displays the value
const showSize = document.querySelector('#show-size')
// The element that displays the value
const showFont = document.querySelector('#show-font')
// The element that displays the value
const showColor = document.querySelector('#show-color')
// The element that displays the value
const showBgColor = document.querySelector('#show-bg-color')
function InputSize() {
	const fontSize = inputSize.value + 'px'
	display.style.fontSize = fontSize
	showSize.innerHTML = fontSize
}
function InputFont() {
	const fontFamily = selectFont.value
	display.style.fontFamily = fontFamily
	showFont.innerHTML = fontFamily
}
function InputText() {
	const text = enterText.value
	display.innerHTML = text
}
function InputBgColor() {
	const bgColor = inputBgColor.value
	display.style.backgroundColor = bgColor
	showBgColor.innerHTML = bgColor
}
function InputColor() {
	const fontColor = inputColor.value
	display.style.color = fontColor
	showColor.innerHTML = fontColor
}
inputSize.addEventListener('input', InputSize)
selectFont.addEventListener('input', InputFont)
enterText.addEventListener('input', InputText)
inputBgColor.addEventListener('input', InputBgColor)
inputColor.addEventListener('input', InputColor)