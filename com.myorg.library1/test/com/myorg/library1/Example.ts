import { ExampleColor } from 'com/myorg/library1/library';
import Example from 'com/myorg/library1/Example';

// Create a new instance of the Example control and
// place it into the DOM element with the id "content"
new Example({
  text: 'Example',
  color: ExampleColor.Default,
}).placeAt('content');
