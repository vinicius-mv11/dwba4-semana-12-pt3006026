class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      componentes: [
        { id: 1, disciplina: 'Sistemas Operacionais', carga: 66.7, periodo: 'Noturno' },
        { id: 2, disciplina: 'Inglês', carga: 33.3, periodo: 'Noturno' },
        { id: 3, disciplina: 'Laboratório de Estruturas de Dados e Programação', carga: 33.3, periodo: 'Noturno' },
        { id: 4, disciplina: 'Introdução a Banco de Dados', carga: 66.7, periodo: 'Noturno' }
      ]
    }
  }

  renderTableHeader() {
    return (
      <tr>
        <th>DISCIPLINA</th>
        <th>CARGA</th>
        <th>PERIODO</th>
      </tr>
    )
  }

  renderTableBody() {
    return this.state.componentes.map((componente, index) => {
      const { id, disciplina, carga, periodo } = componente //destructuring
      return (
        <tr key={id}>
          <td>{disciplina}</td>
          <td>{carga}</td>
          <td>{periodo}</td>
        </tr>
      )
    })
  }

  render() {
    console.log(this.state.data)
    return (
      <table class="table table-striped table-bordered text-center m-5">
        <thead class="thead bg-success text-white">
          {this.renderTableHeader()}
        </thead>
        <tbody>
          {this.renderTableBody()}
        </tbody>
      </table>
    )
  }
}

ReactDOM.render(<Table />, document.getElementById('id-table'));