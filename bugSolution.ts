function printName(name: string | null | undefined): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('Name is null or undefined');
  }
}

printName(null); // Works fine
printName(undefined); // Works fine now