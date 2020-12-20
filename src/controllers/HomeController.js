import Aluno from '../models/Aluno';

class HomeController {
    async index(req, res) {
        const novoAluno = await Aluno.create({
            nome: 'Mary',
            sobrenome: 'Sonia',
            email: 'sonia@gmail.com',
            idade: '27',
            peso: '83',
            altura: '1.45',
        });
        res.json(novoAluno);
    }
}

export default new HomeController();