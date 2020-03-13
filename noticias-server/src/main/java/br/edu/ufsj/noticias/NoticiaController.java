package br.edu.ufsj.noticias;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/noticias")
public class NoticiaController {

	@Autowired
	private NoticiaRepository repositorio;
	
	@GetMapping()
	public List<Noticia> listaDeNoticias() {
		return repositorio.findAll();
	}
}
