const { Usuario, Aluno } = require('./models')
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')

const JWT_SECRET = require('./constants/constants')

const resolvers = {
    Query: {
        async current(_, args, { user }) {
            if(user) {
                return await Usuario.findOne(
                    {
                        where: {
                            id: user.id
                        }
                    })
            }
            throw new Error("Você não está autenticado.")
        },
        
        async findAllUsers(_, args, { user }) {
           
            if(user){
                return await Usuario.findAll()
            }
            throw new Error("Você não está autenticado.")
        },

    },

    Mutation: {
        async register(_, { nome, login, senha }) {
            const user = await Usuario.create({
                nome,
                login,
                senha: await bcrypt.hash(senha, 10),
            });

            return jsonwebtoken.sign({ id: user.id, login: user.login }, JWT_SECRET, {
                expiresIn: "3m",
            });
        },

        async login(_, { login, senha }) {
            const user = await Usuario.findOne({ where: { login } });

            if (!user) {
                throw new Error(
                    "This user doesn't exist. Please, make sure to type the right login."
                );
            }

            const valid = await bcrypt.compare(senha, user.senha);

            if (!valid) {
                throw new Error("You senha is incorrect!");
            }

            return jsonwebtoken.sign({ id: user.id, login: user.login }, JWT_SECRET, {
                expiresIn: "1d",
            });
        },

        async alunoCreate (_, { matricula, av1, av2, av3 }) {
            
            const aluno = Aluno.create({
                matricula,
                av1,
                av2,
                av3
            })

            return aluno
        }
    },
}

module.exports = resolvers