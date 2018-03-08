
names = %w(alice bob charlie dianna weston xander yan zack) + ["Marco M", "Jane J"]

names.each do |name|
  User.create(name: name, height: rand(500), admin: [true, false].sample)
end

User.create(name: "john doe", height: rand(500), admin: [true, false].sample)
