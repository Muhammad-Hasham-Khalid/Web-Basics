# HTML Basics

## What is HTML?
- Hypertext Markup Language - standard markup language used to create web pages.
- Basically tells your browser how to display web pages.

## What does HTML look like?
- HTML uses tags & elements to enclose different parts of the content.

```HTML
<p>Hello World!</p>
<p>What's up?</p>
```

#### Boiler plate code:
```HTML
<!DOCTYPE html>                     # informs the browser that the document type is HTML
<html>                              # wraps all content
<head>                              # put content here that shouldn't be shown to visitors
                                    # E.g.: link to stylesheets or JS files
  <meta charset="utf-8" >           # sets the character set. Usually set to 'utf-8' which includes most characters
  <title>Title of document</title>  
</head>
<body>                              # contains all the content you want to show to visitors
  <p>Hello, welcome to my page :)</p>
</body>
</html>
```
