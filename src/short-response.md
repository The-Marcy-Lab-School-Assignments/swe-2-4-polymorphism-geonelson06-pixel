# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):
- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Examine this code:

```js
class Shape {
  constructor(type) {
    this.type = type;
  }
  getArea() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super('circle');
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(side) {
    super('square');
    this.side = side;
  }
  getArea() {
    return this.side ** 2;
  }
}

const shapes = [new Circle(5), new Square(4), new Circle(3)];
const totalArea = shapes.reduce((sum, shape) => sum + shape.getArea(), 0);
```

Explain how this code demonstrates **polymorphism**. Why can we call `getArea()` on each shape without checking what type of shape it is?

## Response 1

This code shows polymorphism because all the shapes (Circle and Square) are treated as Shape objects, but each shape has its own version of getArea(). Even though shapes contains different types of objects, we can call getArea() on each of them without checking their type. This works because each class overrides the getArea() method. Polymorphism lets us use the same method name for different objects, and the right version is called automatically.

## Prompt 2

Look at this code:

```js
class Media {
  constructor(title) {
    this.title = title;
  }
  play() { 
    return `Playing media: ${this.title}`; 
  }
}

class Song extends Media {
  constructor(title, artist) {
    super(title);
    this.artist = artist;
  }
  play() {
    return `♪ Playing "${this.title}" by ${this.artist}`;
  }
}

class Podcast extends Media {
  constructor(title, host) {
    super(title);
    this.host = host;
  }
  play() {
    return `🎙️ Playing podcast "${this.title}" hosted by ${this.host}`;
  }
}

const playlist = [
  new Song("Thriller", "Michael Jackson"),
  new Podcast("CodeNewbie", "Saron Yitbarek"),
  new Media("voice-memo.mp3")
];

playlist.forEach(item => {
  if (item instanceof Song) {
    console.log(item.playSong());
  } else if (item instanceof Podcast) {
    console.log(item.playPodcast());
  } else {
    console.log(item.play());
  }
});
```

This code works, but it has some problems. Answer the following:

1. Rewrite the `Song` and `Podcast` classes to use inheritance and polymorphism. What changes would you make?
2. After your changes, rewrite the `playlist.forEach()` loop. How does polymorphism simplify this code?
3. Explain what would happen if you wanted to add a new `Video` class. Compare how much work it would take with the original code versus your improved version.

## Response 2

We can use inheritance so that Song and Podcast extend Media. Then they can all have a play() method, and we can call play() on any media item without checking its type. Now the playlist.forEach() loop becomes simple, we don’t need if or instanceof checks anymore because polymorphism automatically calls the right method for each object.

If we wanted to add a new Video class, we would only need to create the class and give it a play() method. The loop would not need to change, unlike the original code, where we would have to add another if statement.