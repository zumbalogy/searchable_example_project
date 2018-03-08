class User
  include Mongoid::Document
  include Mongoid::Timestamps


  field :name, type: :string
  field :nick_name, type: :string

  field :admin, type: :boolean, default: false

  field :height, type: :integer

  field :birthday, type: :date

end
