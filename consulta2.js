db.posts.aggregate(
    [ { $match : { owner : "user4" } } ]
);
