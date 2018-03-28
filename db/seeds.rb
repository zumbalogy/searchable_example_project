names = []
names += %w(Alice Bob)
# names += %w(alice bob charlie dianna weston xander yan zack)
names += %w(Ann Anne Lee Li)
# names += ["Marco M", "Jane J"]
# names += ["Jane J"]

colors = %w(red blue green orange violet)

names.each do |name|
  User.create(name: name,
              score: rand(500),
              admin: [true, false, false].sample,
              favorite_color: colors.sample,
              birthday: Time.at(Time.now - (1000000000 * rand)))
end

User.create(name: 'John Doe')

User.create(name: 'John Doe 3000',
            admin: true,
            birthday: Time.at(100000000000))

u = User.where(name: "Ann").first
u.score = 100
u.save
