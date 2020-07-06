# JavaScript Testing

Practice testing your javascript applications using Jasmine!

`git clone https://github.com/udacity/ud549` and open the files in your editor to follow along with [Udacity's JavaScript Testing course](https://www.udacity.com/course/javascript-testing--ud549).

## Testing with Jasmine:

- _describe_ is used to define a test suite
- _it_ is used to describe related specs
  - It contains many expectations.
  - If any expect fails then that spec fails

```javascript
expect(add(2, 3)).toBe(5);
add(0.1, 0.2) === 0.3;
```

- **expect** expects 1 parameter.
- **actual** add(2, 3).
- The comparison method is called the matcher.
- **toBe()** is a matcher.
- We pass the expected value to the matcher;
- We can also add a not thing like

```javascript
expect(add(0.1, 0.2).not.toBe(0.3));
add(0.1, 0.2) !== 0.3;
```

- Each **expect** must return true to make spec to be passed.

- BeforeEach function runs before every
