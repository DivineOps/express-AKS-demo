module.exports = {
    getCurrentVisitorNumber: function (previousVisitor) {
        if (previousVisitor < 0) {
            throw new Error('Previous visitor number cannot be negative!');
        }
        return previousVisitor + 1;
    }
};
