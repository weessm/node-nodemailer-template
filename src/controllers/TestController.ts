import { Request, Response } from 'express';
import { transporter, IMailOptions } from '../modules/sendMailModule';
import { generate } from 'generate-password';
import { hashSync, genSaltSync } from 'bcrypt';

class TestController {
  async useMail(request: Request, response: Response) {
    // Recebe algumas informações do request body
    const { to, subject, link, name } = request.body;

    // Gera senha provisória
    const salt = genSaltSync(10);
    const generatedPassword = generate({
      length: 10,
      numbers: true,
      symbols: true,
    });
    const senhaProvisoria = hashSync(generatedPassword, salt);

    // Define as opções do email com interface IMailOptions
    const mailOptions: IMailOptions = {
      to: to,
      from: `MailTest <${process.env.SMTP_USER}>`,
      subject: subject,
      text: `Olá, ${name}, essa é sua senha provisória: ${senhaProvisoria}, entre e altere em: ${link}`,
      template: 'primeiroacesso',
      context: {
        link,
        subject,
        name,
        senha: senhaProvisoria,
      },
    };

    // Envia o email com .sendMail(Options)
    await transporter.sendMail(mailOptions).catch((error) => {
      if (error) {
        return response
          .status(500)
          .send({ message: 'Erro ao enviar email', error });
      }
    });

    return response.status(200).send({ message: 'Email enviado com sucesso' });
  }
}

export { TestController };
