export class Button {
  value: string;

  constructor({ value }: { value: string }) {
    this.value = value;
    const button = document.createElement("button");
    button.innerHTML = value;

    return button;
  }
}
