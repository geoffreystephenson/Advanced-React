const Query = {
	dogs(parent, args, ctx, info) {
		global.dogs = global.dogs || [];
		return global.dogs;
		// return [{ name: 'Snickers' }, { name: 'Sunny' }];
	},
};

module.exports = Query;
