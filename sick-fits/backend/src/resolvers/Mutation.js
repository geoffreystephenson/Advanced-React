const Mutations = {
	async createItem(parent, args, ctx, info) {
		// if (!ctx.request.userId) {
		// throw new Error('You must be logged in to do that!');
		// }

		const item = await ctx.db.mutation.createItem(
			{
				data: {
					// This is how to create a relationship between the Item and the User
					// user: {
					// connect: {
					// id: ctx.request.userId,
					// },
					// },
					...args,
				},
			},
			info
		);

		// console.log(item);

		return item;
	},
};

module.exports = Mutations;
