import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

  // Criação do formulário com FormBuilder
  contatoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicializando os campos do formulário e suas validações
    this.contatoForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  // Método chamado ao submeter o formulário
  enviar(): void {
    if (this.contatoForm.valid) {
      // Exibe os dados no console e alerta de sucesso
      console.log('Formulário enviado com sucesso:', this.contatoForm.value);
      alert('Mensagem enviada com sucesso!');
      this.contatoForm.reset(); // Limpa os campos
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
      this.contatoForm.markAllAsTouched(); // Marca os campos para exibir erros
    }
  }

  // Atalho para acessar os campos no template
  get f() {
    return this.contatoForm.controls;
  }
}
