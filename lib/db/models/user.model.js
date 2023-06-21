

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user",
        {
            phone: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            course: {
                type: DataTypes.STRING,
                allowNull: false
            },
            city: {
                type: DataTypes.STRING,
                allowNull: false
            },
            state: {
                type: DataTypes.STRING,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            createdAt: {
                type: DataTypes.DATE
            },
            updatedAt: {
                type: DataTypes.DATE
            },

        });

    User.sync().then(() => {
        console.log('New table created');
    }).finally(() => {
        sequelize.close();
    })

    return User;
};
