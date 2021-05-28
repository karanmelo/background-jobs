import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { user: { name, email } } = data;

    await Mail.sendMail({
      from: 'Queue Test <queue@queuetest.com>',
      to: `${name} <${email}>`,
      subject: 'Cadastro de Usuário',
      html: `Olá, ${name}, bem vindo ao sistema de filas :D`
    });
  }
}