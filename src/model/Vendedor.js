// const jwt = require('jsonwebtoken');

// const auth = require('../config/auth.json');
const connection = require('../config/connection');

class Vendedor {
    constructor() {
        this.id;
        this.nome;
        this.negocio;
        this.endereco;
        this.cpf;
        this.email;
        this.telefone;
        this.senha;
        this.img_perfil;
    }
    
    getOneVendedor(req, res) {
        connection.query(
            `SELECT id, img_perfil, nome, negocio, telefone FROM vendedor WHERE id = '${this.id}'`,
            (error, result) => { 
                if (error) {
                    res.status(400).json(error)
                } else {
                    res.status(201).json(result[0])
                }
            }
        );
    }

    cadastrar(req, res) {
        connection.query(
            `INSERT INTO vendedor ( nome, negocio, endereco, cpf, email, telefone, senha ) values ('${this.nome}', '${this.negocio}', '${this.endereco}', '${this.cpf}', '${this.email}', '${this.telefone}', '${this.senha}' )`,
            (error, result) => { 
                if (error) {
                    res.status(400).json([error.sqlMessage])
                } else {
                    res.status(201).json([{tipo: "vendedor", msg: "Cadastro efetuado com sucesso"}])
                }
            }
        );
    }

    atualizarPerfil(req,res) {

        let nome = this.nome;
        let negocio = this.negocio;
        let endereco = this.endereco;
        let email = this.email;
        let telefone = this.telefone;
        let img = this.img_perfil;
        let set = ''
        if(nome) {
            set = `nome = '${nome}'`;
        }
        if(negocio) {
            if (set) {
                set += `, negocio = '${negocio}'`;
            } else {
                set = `negocio = '${negocio}'`;
            }
        }
        if(endereco) {
            if (set) {
                set += `, endereco = '${endereco}'`;
            } else {
                set = `endereco = '${endereco}'`;
            }
        }
        if(email) {
            if (set) {
                set += `, email = '${email}'`;
            } else {
                set = `email = '${email}'`;
            }
        }
        if(telefone) {
            if (set) {
                set += `, telefone = '${telefone}'`
            } else {
                set = `telefone = '${telefone}'`
            }
        }

        if(img) {
            if (set) {
                set += `, img_perfil = '${img}'`
            } else {
                set = `img_perfil = '${img}'`
            }
        }

        connection.query(
            `UPDATE  vendedor SET ${set} WHERE id = '${this.id}'`,
            (error,result) => {
                if (error) {
                    res.status(400).json(error);
                } else {
                    res.status(201).json({tipo: "vendedor", msg: "Perfil atualizado com sucesso"});
                }
            }
        );

    }

    login(req, res) {
        connection.query(
            `SELECT * FROM vendedor WHERE email = '${this.email}' and senha = '${this.senha}'`,
            (error,result) => {
                if (error) {
                    res.status(400).json(error)
                } else {
                    if(result.length != 0) {
                        //const token = jwt.sign({id: result[0].id},auth.secret,{expiresIn: 86400})
                        res.status(201).json({tipo: "vendedor", id: result[0].id})
                    } else {
                        res.status(404).json("login ou senha invalidos")
                    }
                } 
            }
        );
    }
}

module.exports = new Vendedor;