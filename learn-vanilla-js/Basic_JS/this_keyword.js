/* THIS */

console.log(this.document === document);

console.log(this === window);

this.a = 37;
console.log(window.a);


function f1() {
    'use strict';
    return this;
}
console.log(f1() === window);



function add(c, d) {
    return this.a + this.b + c + d;
}

var o = {
    a: 1,
    b: 3
};
console.log(add.call(o, 5, 7));
console.log(add.apply(o, [10, 20]));


function f() {
    return this.a;
}

var g = f.bind({
    a: 'unicycle'
});
console.log(g());

var h = g.bind({
    a: 'cereal'
}); // won’t work a second time
console.log(h());

var o = {
    a: 8,
    f: f,
    g: g,
    h: h
};
console.log(o.f(), o.g(), o.h());


var o = {
    traditionalFunc: function () {
        console.log('traditionalFunc this === o?', this === o);
    },
    arrowFunc: () => {
        console.log('arrowFunc this === o?', this === o);
        console.log('arrowFunc this === window?', this === window);
    }
};

o.traditionalFunc();

o.arrowFunc();


var o = {
    prop: 37,
    f: function () {
        return this.prop;
    }
};

console.log(o.f()); // logs 37

var o = {
    prop: 23
};

function independent() {
    return this.prop;
}

o.f = independent;

console.log(o.f());