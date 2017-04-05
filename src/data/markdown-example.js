const emphasis = `You can emphasize text like this:

*simple emphasis*  
**strong emphasis**  
***combined emphasis***  
~~strikethrough~~`;

const intro = `Enter **Github**-*flavored* ***Markup*** and see it tranform to \`HTML\``;

const headings = `There are headings:
# Level 1
## Level 2
and so on til
###### Level 6`;

const paragraphs = `You get a new line with two spaces at the end  
And a paragraph by leaving an empty line:

Like this.`;

const links = `You can create relative references like this [description](#).

URLs get turned into links automatically: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet`;

const lists = `There are ordered lists like this:
1. Item one
2. Item two
3. Item three

And there are unordered lists:
* A Item
+ Another Item
- Yet another Item`;


const exampleText = {
  intro,
  examples: {
    emphasis,
    headings,
    paragraphs,
    links,
    lists
  }
};

export default exampleText;
