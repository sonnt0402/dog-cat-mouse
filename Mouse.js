function Mouse(name) {
    this.name = name;
    this.isDead = false;
}

Mouse.prototype.die = function() {
    this.isDead = true;
};

moduel.export = Mouse;
    