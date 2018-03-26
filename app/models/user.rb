load('~/projects/searchable/lib/lexer.rb')
load('~/projects/searchable/lib/parser.rb')
load('~/projects/searchable/lib/dealiaser.rb')
load('~/projects/searchable/lib/optimizer.rb')
load('~/projects/searchable/lib/mongoer.rb')

class User
  include Mongoid::Document
  include Mongoid::Timestamps


  field :name, type: :string
  field :nick_name, type: :string
  field :favorite_color, type: :string

  field :admin, type: :boolean, default: false

  field :height, type: :integer

  field :birthday, type: :date

  def self.search(query)
    default_fields = [:name, :nick_name]
    command_fields = {
      admin: Boolean,
      height: [Numeric, :allow_boolean],
      birthday: Time,
      bday: :birthday,
      color: :favorite_color,
      favorite_color: [String, :allow_boolean]
    }

    tokens = Lexer.lex(query)
    parsed = Parser.parse(tokens)
    opted = Optimizer.optimize(parsed)
    dealiased = Dealiaser.dealias(opted, command_fields)
    mongo_query = Mongoer.build_query(dealiased, default_fields, command_fields)
    User.where(mongo_query)
  end
end
