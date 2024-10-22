function CopyText(text: string) {
  navigator.clipboard.writeText(text);
  console.log(text)
}

export default CopyText