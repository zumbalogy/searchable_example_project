names = %w(alice bob charlie dianna weston xander yan zack) + ["Marco M", "Jane J"]
colors = %w(red blue green yellow cyan magenta)

names.each do |name|
  User.create(name: name,
              height: rand(500),
              admin: [true, false].sample,
              favorite_color: colors.sample,
              birthday: Time.at(Time.now - (1000000000 * rand)))
end

User.create(name: 'john doe', height: 100, admin: true, birthday: Time.at(100000000000))
