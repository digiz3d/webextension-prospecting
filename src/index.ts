async function main() {
  alert("okok")
  console.log("nice")
  await new Promise((r) => setTimeout(r, 1000))
  console.log("injected instagram")
  alert("wouuuh")
}

main()
