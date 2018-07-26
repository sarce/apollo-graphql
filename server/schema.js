let makeExecutableSchema = require('graphql-tools').makeExecutableSchema;

// Define schema (mandatory fields use !)
// Use query for reading only and mutation for uploading new data
let typeDefs = `
	type user {
	    id: String!
	    name: String!
	    email: String
	}

	type Query {
	    users(limit: Int): [user]
	    user(id: String!): user
	}

	input userInput {
	    name: String!
	    email: String
	}

	type Mutation {
	    addUser(post: userInput!): user
	}
	`

let getAllUsers = (obj, args, context, info) => {
    // Some logic here

    const limit = args.limit || '10';
    const total = parseInt(limit);

    const array = [];
    for (let i = 0; i < total; i++) {
        array.push({
            id: i,
            name: 'User ' + i,
            email: 'test' + i + '@gmail.com'
        });
    }
    return array;
};

let getUser = (obj, args, context, info) => {
	// Some logic here

    return {
        id: args.id,
        name: 'User ' + args.id,
        email: 'test' + args.id + '@gmail.com'
    };
};

let addUser = (obj, args, context, info) => {
	// Some logic here

    return args.post;
};

let resolvers = {
    Query: {
        users: getAllUsers,
        user: getUser
    },
    Mutation: {
        addUser: addUser
    }
};

module.exports = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});
